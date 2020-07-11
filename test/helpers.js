export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'

export const EVM_REVERT = 'VM Exception while processing transaction: revert'

// gets rid of the zeros
export const ether = (n) => {
    return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
    )
};

// Same as ether
export const tokens = (n) => ether(n);

export const formatBalance = (balance) => {
    const precision = 100 // Use 2 decimal places
    balance = ether(balance)
    balance = Math.round(balance * precision) / precision // Use 2 decimal places
    return balance
}