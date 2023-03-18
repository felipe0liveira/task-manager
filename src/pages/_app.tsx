import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Task Manager</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
