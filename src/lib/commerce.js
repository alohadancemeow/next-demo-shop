import Commerce from '@chec/commerce.js'

let commerce = null

/**
 * It creates a new instance of the Commerce SDK.
 * @param commercePublicKey - The public key for the commerce.
 * @returns The Commerce object.
 */
const getCommerce = (commercePublicKey) => {

    if (commerce) return commerce

    const publicKey = commercePublicKey || process.env.NEXT_PUBLIC_SANDBOX_PUBLIC_KEY
    const devEnvironment = process.env.NODE_ENV === 'development'

    if (devEnvironment && !publicKey) throw Error('Commerce public API key no found.')
    commerce = new Commerce(publicKey, devEnvironment)

    return commerce

}

export default getCommerce
