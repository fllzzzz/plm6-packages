import { createApp } from "vue";
import { render } from "./render";
import { router } from "@router/index";

const app = createApp(render);

app.use(router).mount("#root");
