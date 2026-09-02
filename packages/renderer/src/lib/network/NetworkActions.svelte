<script lang="ts">
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import type { Menu } from '@podman-desktop/core-api';
import { MenuContext } from '@podman-desktop/core-api';
import { DropdownMenu } from '@podman-desktop/ui-svelte';

import ContributionActions from '/@/lib/actions/ContributionActions.svelte';
import { withConfirmation } from '/@/lib/dialogs/messagebox-utils';
import FlatMenu from '/@/lib/ui/FlatMenu.svelte';
import ListItemButtonIcon from '/@/lib/ui/ListItemButtonIcon.svelte';
import { clearNetworkActionInProgress, setNetworkActionError, setNetworkStatus } from '/@/stores/networks';

import type { NetworkInfoUI } from './NetworkInfoUI';
import UpdateNetworkDialog from './UpdateNetworkDialog.svelte';

interface Props {
  object: NetworkInfoUI;
  dropdownMenu?: boolean;
  detailed?: boolean;
}

let { object, dropdownMenu = true, detailed = false }: Props = $props();

const contributions: Promise<Menu[]> = $derived(window.getContributedMenus(MenuContext.DASHBOARD_NETWORK));
const MenuComponent = $derived(dropdownMenu ? DropdownMenu : FlatMenu);

let showUpdateNetworkDialog = $state(false);

function inProgress(engineId: string, networkId: string, state?: string): void {
  if (state) {
    setNetworkStatus(engineId, networkId, state);
  } else {
    clearNetworkActionInProgress(engineId, networkId);
  }
}

function handleError(engineId: string, networkId: string, errorMessage: string): void {
  setNetworkActionError(engineId, networkId, errorMessage);
}

async function removeNetwork(): Promise<void> {
  // Capture identity before awaiting: a successful delete removes the network from the
  // store, and on the details page `object` is derived from it and becomes undefined
  // before the finally block runs.
  const { engineId, id, name } = object;
  const oldStatus = object.status;

  inProgress(engineId, id, 'DELETING');
  try {
    await window.removeNetwork(engineId, id);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    inProgress(engineId, id, oldStatus);
    handleError(engineId, id, message);
    await window.showMessageBox({
      title: 'Delete Network Failed',
      message: `Error while deleting network ${name}: ${message}`,
      type: 'error',
      buttons: ['Dismiss'],
    });
  } finally {
    inProgress(engineId, id);
  }
}

function closeUpdateDialog(): void {
  showUpdateNetworkDialog = false;
}
</script>

<ListItemButtonIcon
  title="Update Network"
  onClick={(): void => {showUpdateNetworkDialog = true;}}
  icon={faEdit}
  detailed={detailed}
  enabled={object.engineType === 'podman'} />

<ListItemButtonIcon
  title="Delete Network"
  onClick={(): void => withConfirmation(removeNetwork, `delete network ${object.name}`, { title: 'Delete Network?', variant: 'delete' })}
  icon={faTrash}
  detailed={detailed}
  inProgress={object.actionInProgress && object.status === 'DELETING'}
  enabled={object.status === 'UNUSED'} />

{#if showUpdateNetworkDialog}
  <UpdateNetworkDialog network={object} onClose={closeUpdateDialog} />
{/if}

{#await contributions then menus}
  {#if menus.length > 0}
    <MenuComponent>
      <ContributionActions
        args={[object]}
        contextPrefix="networkItem"
        dropdownMenu={dropdownMenu}
        contributions={menus}
        detailed={detailed}
        onError={(errorMessage: string): void => console.error(errorMessage)} />
    </MenuComponent>
  {/if}
{/await}
