import styles from '../page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Link href="/">
            <p>Home</p>
          </Link>
        </div>
        &nbsp;
        <div>
          <Link href="/playoffs">
            <p>Playoffs</p>
          </Link>
        </div>
      </div>
      <br />
      <div className={styles.grid}>
        <table>
          <tbody>
            <tr>
              <th colspan="6">Group 1</th>
            </tr>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>T</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Madhusudhan B.</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sewak Timalsina</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Yogesh Dhami</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Kushal Neupane</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Krishna Niroula</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Ishan Kafle</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <th colspan="6">Group 2</th>
            </tr>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>T</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Shreyas Shrestha</td>
              <td>0</td>
              <td>-1</td>
              <td>0</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anup Bajgain</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sijal Sharma</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Dipesh Paudel</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Milan Khatiwada</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Sugam Lamsal</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className={styles.grid}>
        <table>
          <tbody>
            <tr>
              <th colspan="6">Group 3</th>
            </tr>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>T</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Vimochan</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bishowdip K.</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bibek Yonzan</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bishant Adhikari</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nischal Raut</td>
              <td>0</td>
              <td>-1</td>
              <td>0</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Sangam Adhikari</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <th colspan="6">Group 4</th>
            </tr>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>T</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Chandan K. Rajak</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Saurav Sen K.</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Rohan Magrati</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Cosmic Aryal</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Priyank Acharya</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Prashant Sharma</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
