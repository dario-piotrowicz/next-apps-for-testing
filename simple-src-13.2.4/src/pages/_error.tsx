export default function Error({ statusCode }: { statusCode: number}) {
    return (
        <div style={{padding: '5rem', textAlign: 'center'}}>
            <h1>Custom Error Page</h1>
            <hr  style={{marginBlock: '3rem'}}/>
            <p>
                {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
            </p>
        </div>
    )
  }

Error.getInitialProps = ({ res, err }: { res: {statusCode: number}, err: {statusCode: number}}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export const config = { runtime: 'experimental-edge' };
