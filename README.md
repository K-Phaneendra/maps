# maps
integrating and testing maps and its configurations

# application variables

update the application variables by following the below steps

open `server` or `browser` directory > update the `constants.js` file with necessary configuration variables

# setup

### setup node version

ref: https://github.com/nvm-sh/nvm

1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`
1. open `~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc` file
1. paste
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
1. you should now have nvm installed in your machine. You can check the installation by using `nvm --version`
1. use the command `nvm install 20.11.1` to install the node version as mentioned in `.nvmrc` file


### server
1. have your node version ready as per the `.nvmrc` file
1. open `server` directory
1. run `npm install`

### browser
1. have your node version ready as per the `.nvmrc` file
1. open `server` directory
1. run `npm install`
