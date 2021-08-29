/*
  A mocked version of the adapters library.
*/

class AdaptersMock {
  constructor () {
    this.ipfs = {
      ipfsPeerId: 'fake-id',
      ipfsMultiaddrs: ['addr1', 'addr2'],
      ipfs: {
        pubsub: {
          subscribe: () => {}
        }
      },
      getPeers: () => {},
      connectToPeer: () => {},
      disconnectFromPeer: () => {},
      disconnectFromMultiaddr: () => {}
    }

    this.bchjs = {}

    this.type = 'node.js'

    this.bch = {
      generateBchId: () => {
        return {
          cashAddress: 'cashAddress',
          slpAddress: 'slpAddress',
          publicKey: 'public-key'
        }
      },
      bchjs: {
        Util: {
          sleep: () => {}
        }
      }
    }

    this.pubsub = {
      subscribeToPubsubChannel: () => {},
      publishToPubsubChannel: () => {}
    }

    this.encryption = {
      encryptMsg: () => {}
    }

    this.orbit = {
      createRcvDb: () => {
        return { id: 'fake-orbit-id' }
      },
      connectToPeerDb: () => {}
    }

    this.log = {
      statusLog: () => {}
    }

    this.about = {
      queryAbout: () => {}
    }
  }
}

module.exports = AdaptersMock
