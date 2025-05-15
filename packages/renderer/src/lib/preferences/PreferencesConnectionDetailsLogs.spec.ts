/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/consistent-type-imports */

import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/svelte';
import { Terminal } from '@xterm/xterm';
import { tick } from 'svelte';
import type { Mock } from 'vitest';
import { beforeAll, beforeEach, expect, test, vi } from 'vitest';

import type { ProviderContainerConnectionInfo } from '/@api/provider-info';

let PreferencesConnectionDetailsLogs: typeof import('./PreferencesConnectionDetailsLogs.svelte').default;

const containerConnection: ProviderContainerConnectionInfo = {
  name: 'connection',
  displayName: 'connection',
  endpoint: {
    socketPath: 'socket',
  },
  status: 'started',
  type: 'podman',
};

beforeAll(async () => {
  vi.stubGlobal('window', {
    getConfigurationValue: vi.fn(),
    startReceiveLogs: vi.fn(),
    getComputedStyle: vi.fn().mockReturnValue({
      getPropertyValue: vi.fn().mockReturnValue('value'),
    }),
    addEventListener: vi.fn(),
  });

  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

  Terminal.prototype.open = vi.fn();
  Terminal.prototype.write = vi.fn();

  const module = await import('./PreferencesConnectionDetailsLogs.svelte');
  PreferencesConnectionDetailsLogs = module.default;
});

beforeEach(() => {
  vi.clearAllMocks();
});

test('Expect that the no logs view is displayed', async () => {
  render(PreferencesConnectionDetailsLogs, {
    connectionInfo: containerConnection,
    setNoLogs: () => {
      // nothing
    },
    noLog: true,
  });
  const h1Title = screen.getByRole('heading', { name: 'No Log' });
  expect(h1Title).toBeInTheDocument();
});

test('Expect that the terminal is displayed', async () => {
  render(PreferencesConnectionDetailsLogs, {
    connectionInfo: containerConnection,
    setNoLogs: () => {
      // nothing
    },
    noLog: false,
  });
  const divTerminal = screen.getByLabelText('terminal');
  expect(divTerminal).toBeInTheDocument();
});

test('Should call startReceiveLogs with empty colour codes', async () => {
  render(PreferencesConnectionDetailsLogs, {
    providerInternalId: 'abc123',
    connectionInfo: containerConnection,
    setNoLogs: () => {
      // nothing
    },
    noLog: false,
  });

  await tick();
  // second tick need to process all await statements in onMount method
  await tick();

  expect(window.startReceiveLogs).toHaveBeenCalledTimes(1);

  const args = (window.startReceiveLogs as Mock).mock.calls[0];
  const [id, cb1, cb2, cb3] = args;
  expect(id).toBe('abc123');
  [cb1, cb2, cb3].forEach(cb => expect(typeof cb).toBe('function'));

  cb1(['first']);
  cb2(['second']);
  cb3(['third']);

  expect(Terminal.prototype.write).toHaveBeenCalledTimes(4);

  //disable cursor
  expect((Terminal.prototype.write as Mock).mock.calls[0][0]).toBe('\x1b[?25l');

  //expected calls
  expect((Terminal.prototype.write as Mock).mock.calls[1][0]).toBe('first\r');
  expect((Terminal.prototype.write as Mock).mock.calls[2][0]).toBe('second\r');
  expect((Terminal.prototype.write as Mock).mock.calls[3][0]).toBe('third\r');
});
