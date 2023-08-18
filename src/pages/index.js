import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [33.77196, -84.38370]

export default function Home() {
  return (

  <Map className={styles.homeMap} 
  width="800" 
  height="400" 
  center={DEFAULT_CENTER} 
  zoom={12} 
  scrollWheelZoom={true}>
    {({ TileLayer, Marker, Popup }) => (
      <>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={DEFAULT_CENTER}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </>
    )}
  </Map>

  )
}
