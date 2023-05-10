import Header from '@/components/CompositeComponents/Header/Header'

import styles from './page.module.css'
import ClientsTable from '@/components/CompositeComponents/ClientsTable/ClientsTable'
import { clients } from '@/common/hardocde'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header username='User' welcomeMessage='Welcome' />

      <ClientsTable clientsData={clients} />
    </main>
  )
}
