module.exports = {
  checkout: async (req, res) => {
    try {
      const midtransClient = require("midtrans-client");
      // Create Snap API instance
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: "SB-Mid-server-WjeoqgpdgdEk_xCzrbIFcLBo",
        clientKey: "SB-Mid-client-HphwYEvv1km_uYJl",
      });

      let parameter = {
        transaction_details: {
          order_id: "test-transaction-123",
          gross_amount: 200000,
        },
        credit_card: {
          secure: true,
        },
      };

      const transaction = await snap.createTransaction(parameter)
      const redirectUrl = transaction.redirect_url;

      return  res.redirect(redirectUrl);

    } catch (error) {
      console.log(error);
    }
  },
};
