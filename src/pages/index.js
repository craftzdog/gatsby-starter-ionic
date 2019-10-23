import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader
} from '@ionic/react';
import { compass, book, build, colorFill, grid } from 'ionicons/icons';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <IonCard className="welcome-card">
      <div style={{maxWidth: 200}}>
        <Image />
      </div>
      <IonCardHeader>
        <IonCardSubtitle>Get Started</IonCardSubtitle>
        <IonCardTitle>Welcome to Ionic</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          Now that your app has been created, you'll want to start building out features and
          components. Check out some of the resources below for next steps.
        </p>
      </IonCardContent>
    </IonCard>

    <IonList lines="none">
      <IonListHeader>
        <IonLabel>Resources</IonLabel>
      </IonListHeader>
      <IonItem onClick={() => navigate("/page-2/")} className="ion-activatable">
        <IonIcon slot="start" color="medium" icon={compass} />
        <IonLabel>Go to page 2</IonLabel>
      </IonItem>
      <IonItem href="https://ionicframework.com/docs/" target="_blank">
        <IonIcon slot="start" color="medium" icon={book} />
        <IonLabel>Ionic Documentation</IonLabel>
      </IonItem>
      <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
        <IonIcon slot="start" color="medium" icon={build} />
        <IonLabel>Scaffold Out Your App</IonLabel>
      </IonItem>
      <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
        <IonIcon slot="start" color="medium" icon={grid} />
        <IonLabel>Change Your App Layout</IonLabel>
      </IonItem>
      <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
        <IonIcon slot="start" color="medium" icon={colorFill} />
        <IonLabel>Theme Your App</IonLabel>
      </IonItem>
    </IonList>
  </Layout>
)

export default IndexPage
