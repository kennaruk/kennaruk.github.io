// Import the functions you need from the SDKs you need
import { getAnalytics, isSupported } from "firebase/analytics";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv4LYktlJCl7mnCtN21VebPC82xazyI3Y",
  authDomain: "kennaruk-github-io.firebaseapp.com",
  projectId: "kennaruk-github-io",
  storageBucket: "kennaruk-github-io.firebasestorage.app",
  messagingSenderId: "927636864348",
  appId: "1:927636864348:web:1c3c308ae718f59e4dd599",
  measurementId: "G-XESRRQ0QN8",
};

let app: ReturnType<typeof initializeApp> | null = null;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((yes: boolean) => {
    if (yes) {
      analytics = getAnalytics(app as FirebaseApp);
    }
  });
}

export { analytics, app };
