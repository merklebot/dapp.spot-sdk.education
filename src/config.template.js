export default {
  API_SERVER: "http://localhost:3012",
  STRIPE_KEY: "pk_................",
  SUBSTRATE: {
    url: "ws://127.0.0.1:9944",
    types: {
      Address: "AccountId",
      LookupSource: "AccountId",
      Record: "Vec<u8>",
      RingBufferIndex: {
        start: "Compact<u64>",
        end: "Compact<u64>"
      },
      RingBufferItem: "(Compact<Moment>,Record)"
    },
    keyring: {
      isDevelopment: false,
      type: "sr25519"
    }
  }
};
