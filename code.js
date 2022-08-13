// Enter Contract ABI below (don't change if using Smolrun's Locked Free Mint Contract!)
const NFT = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"unlocker","type":"address"},{"indexed":false,"internalType":"uint256","name":"bean","type":"uint256"}],"name":"CopiumUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipLimitClaiming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setunlockFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"unlock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"unlockCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlockFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawWavax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]';
// Enter Contract Address Below
const NFT_ADDRESS = "0x2108034DBc68E62B1c11FC66aB15071eAD815326";
let provider, signer, currentNetwork, connectedContract;
let account;
// Change price below
let price = 1;

// comment below block for Fuji Testnet

const defaultNetwork = "0xa86a",
    { ethereum: ethereum } = window,
    networks = { "0xa86a": { chainId: "0xa86a", chainName: "Avalanche", nativeCurrency: { decimals: 18, symbol: "AVAX" }, rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"], blockExplorerUrls: ["https://snowtrace.io"] } };
const RPC = 'https://api.avax.network/ext/bc/C/rpc';
const explorer = 'https://snowtrace.io/tx/';

// comment below block for Avalanche Mainnet
/*
const defaultNetwork = "0xa869",
    { ethereum: ethereum } = window,
    networks = { "0xa869": { chainId: "0xa869", chainName: "Fuji", nativeCurrency: { decimals: 18, symbol: "AVAX" }, rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"], blockExplorerUrls: ["https://testnet.snowtrace.io"] } };
const RPC = 'https://api.avax-test.network/ext/bc/C/rpc';
const explorer = 'https://testnet.snowtrace.io/tx/';
*/

// Much of the below Web3 connection code borrowed from ftso.alexdupre.com
// If you are using Flare or Songbird network I highly recommend delegating to his FTSO
async function checkWeb3() {
    if (void 0 !== window.ethereum) {
        console.log("Web3 provider is installed!"); (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
        try {
            account = await signer.getAddress();
            await checkNetwork();
            await checkAccount();
            $("button#connect").html("Connected").css("background", "red");
            $("button#connect").prop("disabled", !0);
            await getOwned(account);
        } catch (t) {
            console.log(t);
        }
    } else console.log("Please install MetaMask or another web3 provider!"), alert("Please install MetaMask or another web3 provider!");
}

async function connect() {
    console.log("Connecting..."), $("p#mintError").text(""), $("button#connect").prop("disabled", !0);
    try {
        await ethereum.request({ method: "eth_requestAccounts" });
        await checkNetwork();
        await checkAccount();
        console.log("Connected.");
        $("button#connect").html("Connected").css("background", "red");
    } catch (t) {
        $("button#connect").prop("disabled", !1), 4001 === t.code ? console.log("Please connect to MetaMask.") : console.error(t), $("p#mintError").text(`${t}`);
    }
}

async function checkNetwork() {
    ethereum.on("chainChanged", handleChainChanged);
    let t = await ethereum.request({ method: "eth_chainId" });
    void 0 !== networks[t]
        ? (currentNetwork = networks[t])
        : ethereum.isMetaMask
            ? (await setupNetwork(defaultNetwork), t === (await ethereum.request({ method: "eth_chainId" })) && console.log("Please switch to one of the supported networks."))
            : console.log("Please switch to one of the supported networks.");
}

async function checkAccount() {
    await ethereum.request({ method: "eth_accounts" });
    ethereum.on("accountsChanged", handleAccountsChanged);
}

async function setupNetwork(t) {
    try {
        await ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: networks[t].chainId }] });
    } catch (e) {
        if (4902 === e.code)
            try {
                await ethereum.request({ method: "wallet_addEthereumChain", params: [networks[t]] });
            } catch (t) {
                4001 === t.code ? console.log("Please approve the Avalanche network.") : console.error(t);
            }
        else 4001 === e.code ? console.log("Avalanche configuration already present.") : console.error(e);
    }
    (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
}

async function handleChainChanged(t) {
    console.log("Chain changed to " + t),
        $("p#mintError").text(""),
        (currentNetwork = networks[t]),
        (provider = new ethers.providers.Web3Provider(window.ethereum)),
        (signer = provider.getSigner()),
    void 0 !== currentNetwork || (console.log("Please switch to one of the supported networks."), $("p#mintError").text("Wrong Network"));
}

async function handleAccountsChanged(t) {
    console.log("Account changed to " + t), t.length;
}

// getMinted function used to get # of NFTs already minted.
// change number to correct max supply
const getMinted = async () => {
        const t = new ethers.providers.JsonRpcProvider(RPC);
        connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
        let minted = await connectedContract.totalSupply();
        $("span#nftsMinted").text(`${minted}`);

        // change number below to your max supply
        if (minted === 999) {
            $("button#mintNft").prop("disabled", !0);
        }
}

// Get # owned
const getOwned = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
    try {
        if (ethereum) {
            let owned = await connectedContract.balanceOf(account);
            $("span#owned").text(owned);
        } else console.log("Ethereum object doesn't exist!");
    } catch (e) {
        console.log(e);
    }
};

// Mint function
const mintNft = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
        try {
            if (ethereum) {
                $("p#mintError").text("");
                let amount = $("input#mintCount").val().toString();
                let cost = ($("span#price").text()).toString();
                let tx = await connectedContract.mint(amount, { value: ethers.utils.parseEther(cost)});
                $("p#mintError").text("Minting...");
                await tx.wait();
                let txLink = `<a href='${explorer}${tx.hash}' target="_blank" rel="noreferrer">\n                                  View Transaction</a>`;
                $("p#mintError").html(`Successfully minted: ${txLink}`);
                getMinted();
                getOwned();
            } else console.log("Ethereum object doesn't exist!"), $("p#mintError").text("Connect wallet and refresh!");
        } catch (e) {
            console.log(e), $("p#mintError").text(`${e.data.message}`);
        }
};

$(function () {
    $("span#price").text(price);
    getMinted();
    $("button#connect")
        .off()
        .on("click", function (t) {
            t.preventDefault(), connect();
    });
    $("button#mintButton")
        .off()
        .on("click", function (t) {
            t.preventDefault(), mintNft();
    });
    $("input#mintCount").change(function () {
        $("span#price").text($("input#mintCount").val() * price)
        // If using decimals, comment out above and uncomment below
        //$("span#price").text(($("input#mintCount").val() * price).toFixed(1));
    }),
    checkWeb3();
});