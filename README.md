# Starting

Dopo aver scaricato il progetto da github, lanciare da riga di comando:

```
npm install --global lerna
lerna bootstrap
```

# Packages

- vuejsf -> componenti
- vuejsf-showcase -> package che importa vuejsf

# Server

Per far partire il server dello showcase, lanciare dalla root

```
npm run serve
```

Modificando qualcosa in uno dei due package, le modifiche vengono riportate immediatamente nel browser :astonished:


### Compiles and minifies for production on all sub projects
```
npm run build
```

### Lints and fixes files on all sub projects
```
npm run lint
```

### Run your unit tests on all sub projects
```
npm run test:unit
```

### Run your e2e headlessly on all sub projects
```
npm run local:run
```

# Altro

Singoli comandi specifici di progetto nel README del progetto specifico.



