// ========== HELPER FUNCTIONS ==========

var style = document.createElement('style');
style.innerHTML = '.hide { display: none !important; }';
document.getElementsByTagName('head')[0].appendChild(style);

const removeHide = function (elem) { elem.classList.remove("hide") }
const hide = function (elem) { elem.classList.add("hide") }
const disable = function (elem) { elem.setAttribute("disabled", "disabled") }
const enable = function (elem) { elem.removeAttribute("disabled") }

const debounce = (context, func, delay) => {
    let timeout
    return (...arguments) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => { func.apply(context, arguments) }, delay)
    }
}

// ========== CONSTANTS ==========

const contractABI = [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "approved", type: "address" }, { indexed: !0, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "operator", type: "address" }, { indexed: !1, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "previousOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "from", type: "address" }, { indexed: !0, internalType: "address", name: "to", type: "address" }, { indexed: !0, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [], name: "MAX_MINTS_PER_ADDRESS", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "MAX_SUPPLY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isMintActive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "jokeId", type: "uint256" }], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "active", type: "bool" }], name: "setMintActive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }]
const contractAddress = "0x741dfb71e20b9d266d54fed8e7af915b3cd50c70"
const web3 = AlchemyWeb3.createAlchemyWeb3("wss://polygon-mumbai.g.alchemy.com/v2/MA73MnRjzd3xgxZ7uPzMvNEOFrFYehEy")
const scannerLinkPrefix = "https://polygonscan.com/"
const mintingStartsAt = new Date("05/01/2022 08:00 AM UTC")

// ========== HTML ELEMENTS ==========

const controlPanel = document.getElementById("control_panel")
const dayText = document.getElementById("day_text")
const loadingText = document.getElementById("loading_text")
const missingMetamaskError = document.getElementById("missing_metamask_error")
const feedbackContainer = document.getElementById("feedback_container")
const feedbackText = document.getElementById("feedback")
const feedbackDismissLink = document.getElementById("feedback_dismiss_link")
const dateSvgText = document.getElementById("date_svg_text")
const connectLink = document.getElementById("connect_link")
const mintLink = document.getElementById("mint_link")
const priceText = document.getElementById("price_text")
const mintingText = document.getElementById("minting_text")
const mintedLink = document.getElementById("minted_link")
const assetLink = document.getElementById("asset_link")
const timerContainer = document.getElementById("timer_container")
const daysText = document.getElementById("days_text")
const hoursText = document.getElementById("hours_text")
const minutesText = document.getElementById("minutes_text")
const secondsText = document.getElementById("seconds_text")

// ========== STATE AND RELATED FUNCTIONS ==========

let state = {
    controlPanelVisible: false,
    date: null, // Date object
    tokenId: null,
    metamaskPresent: false,
    metamaskConnected: false,
    mintingStartsIn: null,
    loadingAssetStatus: false,
    feedback: null,
    assetLink: null,
    hasOwner: false,
    mintActive: false,
    minting: false,
    minted: false,
    transferTxHash: null,
    timer: null
}

// ========== UPDATE UI FUNCTIONS ==========

const updateUI = function (state) {
    debouncedUpdateUI(state)
}

const debouncedUpdateUI = debounce(this, state => updateUiNow(state), 100)

const updateUiNow = function (state) {
    updateControlPanel(state)
    updateDayText(state)
    updateDateSvgText(state)

    updateMissingMetaMaskError(state)
    updateLoadingText(state)
    updateFeedbackView(state)
    updateConnectLink(state)
    updateMintLink(state)
    updateMintingText(state)
    updateMintedLink(state)
    updateAssetLink(state)
    updateTimer(state)
}

const updateControlPanel = function (state) {
    if (state.controlPanelVisible) {
        removeHide(controlPanel)
        // Also remove initial display:none style.
        controlPanel.style.display = ""
    } else {
        hide(controlPanel)
    }
}

const updateDayText = function (state) {
    dayText.innerText = state.date.toISOString().split('T')[0]
}

const updateDateSvgText = function (state) {
    const dateString = state.date.toISOString().split('T')[0]
    const svgTextSize = 48 * 10 / dateString.length;
    dateSvgText.textContent = dateString
    dateSvgText.setAttribute("font-size", svgTextSize)
}

const updateMissingMetaMaskError = function (state) {
    if (!state.metamaskPresent && state.mintActive) {
        removeHide(missingMetamaskError)
    } else {
        hide(missingMetamaskError)
    }
}

const updateLoadingText = function (state) {
    if (state.loadingAssetStatus && state.mintActive) {
        removeHide(loadingText)
    } else {
        hide(loadingText)
    }
}

const updateFeedbackView = function (state) {
    if (state.feedback == null) {
        hide(feedbackContainer)
        return
    }

    removeHide(feedbackContainer)

    feedbackText.innerText = state.feedback
}

const updateConnectLink = function (state) {
    if (!state.metamaskConnected && state.metamaskPresent && state.mintActive) {
        removeHide(connectLink)
    } else {
        hide(connectLink)
    }
}

const updateMintLink = function (state) {
    if (state.connected &&
        !state.loadingAssetStatus &&
        !state.minting &&
        !state.minted &&
        !state.hasOwner &&
        state.mintActive
    ) {
        removeHide(mintLink)
        removeHide(priceText)
    } else {
        hide(priceText)
        hide(mintLink)
    }
}

const updateMintingText = function (state) {
    if (state.minting) {
        removeHide(mintingText)
    } else {
        hide(mintingText)
    }
}

const updateMintedLink = function (state) {
    if (state.minted) {
        removeHide(mintedLink)
        mintedLink.setAttribute("href", scannerLinkPrefix + "tx/" + state.transferTxHash)
        mintedLink.innerText = "Minted!"
    } else {
        hide(mintedLink)
    }
}

const updateAssetLink = function (state) {
    if (state.assetLink && state.mintActive) {
        removeHide(assetLink)
        assetLink.setAttribute("href", scannerLinkPrefix + "address/" + contractAddress)
    } else {
        hide(assetLink)
    }
}

const updateTimer = function (state) {
    let msLeft = state.mintingStartsIn

    if (!msLeft) {
        hide(timerContainer)
        return
    }

    removeHide(timerContainer)

    var _second = 1000
    var _minute = _second * 60
    var _hour = _minute * 60
    var _day = _hour * 24

    daysText.innerText = Math.floor(msLeft / _day)
    hoursText.innerText = Math.floor((msLeft % _day) / _hour)
    minutesText.innerText = Math.floor((msLeft % _hour) / _minute)
    secondsText.innerText = Math.floor((msLeft % _minute) / _second)
}

// ========== WEB3 EVENTS ==========

const handleConnectedEvent = function () {
    state.metamaskConnected = true
    state.feedback = null
    updateUI(state)
}

const handleConnectionErrorEvent = function (error) {
    state.metamaskConnected = false
    state.feedback = error
    updateUI(state)
}

const handleDisconnectedEvent = function () {
    state.metamaskConnected = false
    state.feedback = null
    updateUI(state)
}

const handleMintErrorEvent = function (error) {
    state.minting = false
    state.feedback = error
    updateUI(state)
}

const handleTransferEvent = function (event) {
    if (event.returnValues.to.toLowerCase() != window.ethereum.selectedAddress) return
    if (event.returnValues.tokenId != state.tokenId) return

    state.minting = false
    state.minted = true
    state.transferTxHash = event.transactionHash

    updateUI(state)
}

const handleOwnerFetchedEvent = function () {
    state.loadingAssetStatus = false
    state.hasOwner = true
    state.assetLink = scannerLinkPrefix + "address/" + contractAddress
}

const handleOwnerFetchedErrorEvent = function () {
    state.loadingAssetStatus = false
    state.hasOwner = false
    state.assetLink = null

    updateUI(state)
}

const handleTimerEvent = function () {
    var now = new Date()
    var msLeft = mintingStartsAt - now
    if (msLeft > 0) {
        state.mintingStartsIn = msLeft
        state.mintActive = false
    } else {
        state.mintingStartsIn = null
        state.mintActive = true
        clearInterval(state.timer);
    }

    updateUI(state)
}

// ========== UI TRIGGERED ACTIONS ==========

const connectWallet = async function () {
    try {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        });
    } catch (error) {
        handleConnectionErrorEvent(error.message)
    }
}

const mint = async function () {
    state.minting = true
    updateUI(state)

    let userAddress = window.ethereum.selectedAddress
    let value = web3.utils.toHex(web3.utils.toWei('7', 'ether'))

    const transactionParameters = {
        to: contractAddress,
        from: userAddress,
        value: value,
        data: window.contract.methods.mint(state.tokenId).encodeABI()
    }

    try {
        await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
    } catch (error) {
        handleMintErrorEvent(error.message)
    }
}

const checkConnection = async function () {
    try {
        const addressArray = await window.ethereum.request({
            method: "eth_accounts",
        })
        if (addressArray.length > 0) {
            handleConnectedEvent()
        } else {
            handleDisconnectedEvent()
        }
    } catch (err) {
        handleDisconnectedEvent()
    }
}

const dismissFeedback = function () {
    state.feedback = null
    updateUI(state)
}

// ========== SETUP ==========

function parseDate(dateString) {
    // Expected format is YYYY-MM-DD
    const dateParts = dateString.split("-")
    const year = parseInt(dateParts[0])
    const month = parseInt(dateParts[1])
    const day = parseInt(dateParts[2])
    if (!day || !month || !year) {
        return null
    }

    const date = new Date()
    date.setFullYear(year)
    date.setMonth(month - 1)
    date.setDate(day)

    return date
}

const setup = async function () {
    // Expected format is YYYY-MM-DD
    let date = parseDate(window.location.pathname.substring(1))
    if (!date) {
        date = parseDate(window.location.hash.substring(1))
    }
    if (!date) {
        window.location.href = "/404.html"
        return
    }

    state.date = date
    state.tokenId = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()

    hide(missingMetamaskError)
    hide(loadingText)
    hide(connectLink)
    hide(mintLink)
    hide(priceText)
    hide(mintingText)
    hide(mintedLink)
    hide(feedbackContainer)

    state.controlPanelVisible = true

    // Setup countdown.
    handleTimerEvent()
    setInterval(handleTimerEvent, 1000)

    if (window.ethereum) {
        state.metamaskPresent = false
        updateUI(state)
    } else {
        state.metamaskPresent = true
        state.loadingAssetStatus = true
        updateUI(state)

        connectLink.onclick = function () { connectWallet() }
        mintLink.onclick = function () { mint() }
        feedbackDismissLink.onclick = function (e) { e.preventDefault(); dismissFeedback() }

        window.ethereum.on('accountsChanged', async () => { checkConnection() })
        window.contract = await new web3.eth.Contract(contractABI, contractAddress)
        let options = { fromBlock: "latest" }

        window.contract.methods.ownerOf(state.tokenId).call()
            .then(handleOwnerFetchedEvent)
            .catch(handleOwnerFetchedErrorEvent)

        window.contract.events.Transfer(options)
            .on('data', event => handleTransferEvent(event))

        checkConnection()
    }
}

setup()
