import Image from 'next/image'
import styles from './page.module.css'
import { revalidatePath } from 'next/cache';
import { KvEntry } from './KvEntry';
import { getMyKv } from './getMyKv';

export const runtime = 'edge';

export default async function Home() {

  const kvEntries = await getKvEntries();

  async function addKvEntry(formData: FormData) {
    'use server';

    const key = formData.get('key');
    const value = formData.get('value');

    const myKv = getMyKv();
    if(typeof key === 'string' && typeof value === 'string') {
      await myKv.put(key, value);
    }
    revalidatePath('/');
  }

  async function deleteKvEntry(key: string) {
    'use server';

    const myKv = getMyKv();
    await myKv.delete(key);
    revalidatePath('/');
  }

  return (
    <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        {/* @ts-ignore */}
        <form className={styles.form} action={addKvEntry}>
          <label>
            <span>
              key:
              </span>
               <input type="text" name='key' placeholder='key' />
          </label>
          <label>
            <span>
            value:
            </span>
             <input type="text" name='value' placeholder='value' />
          </label>
          <button>add</button>
        </form>

        <hr className={styles.hr}></hr>

        <span>Kv Entries:</span>
        <ul>
          {
            kvEntries.map(entry => <li key={entry.key}>
              <KvEntry entry={entry} deleteKvEntry={deleteKvEntry}/>
            </li>
            )
          }
        </ul>
    </main>
  )
}

async function getKvEntries(): Promise<{key: string, value: string}[]> {
  const myKv = getMyKv();

  const entries: {key: string, value: string}[] = [];

  const list = await myKv.list();

  for (const {name} of list.keys) {
    const value = await myKv.get(name);
    if(value) {
      entries.push({key: name, value});
    }
  }

  return entries;
}
