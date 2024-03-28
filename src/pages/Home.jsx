import React from 'react'
import Card from '../components/Card'
import AboutUs from '../components/AboutUs'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='mar-top'>
        <div className="home__container">
            <div className="content__container">
            <h1>
                Enigma Koperasi<br />
                <span className="heading__1">Layanan Finansial Pilihan</span><br />
                <span className="heading__2">Utama Kita Semua</span>
            </h1>
            <p>
                Koperasi Enigma adalah sebuah koperasi yang berdedikasi tinggi pada 
                pemberdayaan ekonomi masyarakat. Didirikan pada tahun 2010, kami telah
                berkomitmen untuk memberikan solusi finansial yang inovatif dan 
                terpercaya kepada anggota kami.
            </p>
            <form>
                <input type="text" placeholder="Drop your email for services updates" />
                <button type="submit">Submit</button>
            </form>
            </div>
            <div className="image__container">
            <img src="/images/header-1.jpg" alt="header" />
            <img src="/images/header-2.jpg" alt="header" />
            <div className="image__content">
                <ul>
                <li>Get promos for groceries
                <br />For new registries</li>
                </ul>
            </div>
            </div>
        </div>
        <AboutUs/>
        <div className="justify-content-center d-flex mt-5">
            <h2 className='section__title'>Our Services</h2>
        </div>
        <div className="page__content mb-5">
            
            <Card 
                title="Simpan" 
                copy="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains" 
                buttonText="Daftar" 
            />
            <Card 
                title="Pinjaman Modal Uasha" 
                copy="Plan your next beach trip with these fabulous destinations" 
                buttonText="Daftar" 
            />
            <Card 
                title="Investasi Tahunan" 
                copy="It's the desert you've always dreamed of" 
                buttonText="Daftar" 
            />
            <Card 
                title="Investasi Aset" 
                copy="Seriously, straight up, just blast off into outer space today" 
                buttonText="Daftar" 
            />
        </div>
    </div>
  )
}
