import { version as styles, dependencies as stylesDeps } from './../../../styles/package.json';
import {
  version as components,
  dependencies as componentsDeps,
} from './../../../components/package.json';
import {
  version as componentsangular,
  dependencies as componentsangularDeps,
} from './../../../components-angular/package.json';
import { version as internetheader } from './../../../internet-header/package.json';
import { version as intranetheader } from './../../../components-angular/projects/intranet-header/package.json';
import { version as icons } from './../../../icons/package.json';
import { version as documentation } from './../../../documentation/package.json';

const versionFilterRegexes: any = {
  major: /^(?:(\d+)\.\d+\.\d+)/,
  minor: /^(?:\d+\.(\d+)\.\d+)/,
  patch: /^(?:\d+\.\d+\.(\d+))/,
  pre: /^(?:\d+\.\d+\.\d+[ .:,;!?_~`'"^*+\-=<>#&$%@|\/()[\]{}]?(.*))/,
  majorminor: /^(?:(\d+\.\d+)\.\d+)/,
  majorminorpatch: /^(\d+\.\d+\.\d+)/,
};

const versionFilterMap: any = {
  major: 'major',
  M: 'major',
  minor: 'minor',
  m: 'minor',
  pre: 'pre',
  majorminor: 'majorminor',
  Mm: 'majorminor',
  majorminorpatch: 'majorminorpatch',
  Mmp: 'majorminorpatch',
};

const versions: any = {
  styles,
  components,
  componentsangular,
  internetheader,
  intranetheader,
  icons,
  documentation,
  bootstrap: stylesDeps.bootstrap,
  stencil: componentsDeps['@stencil/core'],
  angular: componentsangularDeps['@angular/core'],
};

export function getVersion(version: string, filter: string = '') {
  const cleanVersion = versions[version].replace(/^[^\d]+/, '');

  if (filter) {
    const filterRegex = versionFilterRegexes[versionFilterMap[filter]];
    let matchArray = null;

    if (filterRegex) matchArray = cleanVersion.match(filterRegex);

    return matchArray !== null && matchArray[1] ? matchArray[1] : null;
  } else {
    return cleanVersion.length > 0 ? cleanVersion : versions[version] ?? null;
  }
}
