export default function Refunds () {
  // ensure this example error does not prevent the app from building
  if (process.env.NODE_ENV === 'development') {
    throw new Error('A very unexpected error occured...');
  }

  return null
}
