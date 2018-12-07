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
