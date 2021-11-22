const fs = require('fs');
const path = require('path');

import template from './index.tmpl';
import {Command, flags} from '@oclif/command';

class Cli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),

  }

  static args = [{name: 'file'}]

  async run() {
    const {args: { file }, flags} = this.parse(Cli);

    const test = file.includes('leetcode');
    const pathArr = ['../../', 'apps', 'yw_next', 'pages','articles'];

    if (test) { 
      pathArr.push('leetCode');
    }

    const articlePath = path.join(...pathArr, file);
    fs.mkdirSync(articlePath, { recursive: true });

    const templateString = template(new Date().toISOString());
    try {
      fs.writeFileSync(`${articlePath}/index.mdx`, templateString, 'utf-8');
      //file written successfully
    } catch (err) {
      console.error(err)
    }
    
  }
}

export = Cli
