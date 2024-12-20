import { Configuration, PlaidApi, PlaidEnvironments } from "plaid"

const config = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        Headers: {
            "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
            "PLAID-SECRET": process.env.PLAID_SANDBOX_SECRET
        }
    }
})

export const plaidClient = new PlaidApi(config)