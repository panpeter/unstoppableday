import {store} from "../../app/store";
import {accountsChanged, disconnected} from "./walletSlice";

export const dispatchEthereumEvents = () => {
    const ethereum = window.ethereum
    if (ethereum) {
        ethereum.on('accountsChanged', (accounts: Array<string>) => {
            store.dispatch(accountsChanged(accounts))
        });
        ethereum.on('disconnect', () => {
            store.dispatch(disconnected())
        });
        ethereum.on('chainChanged', () => window.location.reload());
    }
}
