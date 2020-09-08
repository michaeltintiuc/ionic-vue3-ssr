import {
  IonApp,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@modus/ionic-vue";
import { h } from "vue";

export const App = {
  components: {
    IonApp,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    console.log("setup");
    const msg = "content";
    const url = "/";
    const title = h(IonTitle, {}, () => "foo");
    const toolbar = h(IonToolbar, {}, () => title);
    const header = h(
      IonHeader,
      { mode: "ios", translucent: true },
      () => toolbar
    );
    return () =>
      h(IonApp, {}, () =>
        h(IonPage, {}, [
          header,
          h(
            IonContent,
            { forceOverscroll: true, color: "primary" },
            () => `${msg} on ${url}`
          ),
        ])
      );
  },
};
