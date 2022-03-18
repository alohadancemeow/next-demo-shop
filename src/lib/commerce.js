import Commerce from '@chec/commerce.js'

export const commerce = new Commerce(
    process.env.NEXT_PUBLIC_SANDBOX_PUBLIC_KEY,
    true
)
