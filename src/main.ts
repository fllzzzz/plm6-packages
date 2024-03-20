import { createApp } from "vue";
import { render } from "./render";
import { router } from "@router/index";
import '@styles/general.css';

const app = createApp(render);

app.use(router).mount("#root");
