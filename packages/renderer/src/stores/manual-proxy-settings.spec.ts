/**********************************************************************
 * Copyright (C) 2026 Red Hat, Inc.
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

import { get } from 'svelte/store';
import { beforeEach, describe, expect, test } from 'vitest';

import { clearManualProxySettings, manualProxySettings, saveManualProxySettings } from './manual-proxy-settings';

describe('manualProxySettings store', () => {
  beforeEach(() => {
    clearManualProxySettings();
  });

  test('should be undefined initially', () => {
    expect(get(manualProxySettings)).toBeUndefined();
  });

  test('should save manual proxy settings', () => {
    const settings = {
      httpProxy: 'http://proxy:8080',
      httpsProxy: 'https://proxy:8443',
      noProxy: 'localhost',
    };

    saveManualProxySettings(settings);

    expect(get(manualProxySettings)).toEqual(settings);
  });

  test('should clear settings', () => {
    saveManualProxySettings({ httpProxy: 'test', httpsProxy: '', noProxy: '' });
    clearManualProxySettings();

    expect(get(manualProxySettings)).toBeUndefined();
  });
});
