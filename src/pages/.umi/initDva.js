import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/home/huulke/Documents/projects/antAdmin/src/models/user.js').default) });
