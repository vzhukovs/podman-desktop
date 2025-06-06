<script lang="ts">
import '@xterm/xterm/css/xterm.css';

import { EmptyScreen } from '@podman-desktop/ui-svelte';
import type { Terminal } from '@xterm/xterm';
import { onMount } from 'svelte';

import NoLogIcon from '../ui/NoLogIcon.svelte';
import TerminalWindow from '../ui/TerminalWindow.svelte';
import type { ContainerInfoUI } from './ContainerInfoUI';

export let container: ContainerInfoUI;
export let screenReaderMode = false;
let attachContainerTerminal: Terminal;
let closed = false;
let callbackId: number;

let listened = false;
$: listenTerminalData(attachContainerTerminal, callbackId);

// listenTerminalData only when attachContainerTerminal is bound from TerminalWindow component
// and callbackId is defined
function listenTerminalData(terminal: Terminal, cbId: number): void {
  if (!attachContainerTerminal || !cbId) {
    return;
  }
  if (listened) {
    return;
  }
  listened = true;
  // pass data from xterm to container
  terminal.onData(data => {
    window
      .attachContainerSend(callbackId, data)
      .catch((err: unknown) => console.log(`Error sending data to container ${container.id}`, err));
  });
}

// update terminal when receiving data
function receiveDataCallback(data: Buffer): void {
  attachContainerTerminal?.write(data.toString());
}

function receiveEndCallback(): void {
  closed = true;
}

// call exec command
async function attachToContainer(): Promise<void> {
  if (container.state !== 'RUNNING') {
    return;
  }

  // attach to the container
  callbackId = await window.attachContainer(
    container.engineId,
    container.id,
    receiveDataCallback,
    () => {},
    receiveEndCallback,
  );

  // pass data from xterm to container
  attachContainerTerminal?.onData(async data => {
    await window.attachContainerSend(callbackId, data);
  });
}

onMount(async () => {
  await attachToContainer();
});
</script>

<div class="h-full" class:hidden={container.state !== 'RUNNING'}>
  <TerminalWindow class="h-full" bind:terminal={attachContainerTerminal} screenReaderMode={screenReaderMode} disableStdIn={false} showCursor={true} />
</div>

<EmptyScreen
  hidden={!closed && container.state !== 'RUNNING'}
  icon={NoLogIcon}
  title="No TTY"
  message="Tty has stopped" />

<EmptyScreen
  hidden={container.state === 'RUNNING'}
  icon={NoLogIcon}
  title="No TTY"
  message="Container is not running" />
