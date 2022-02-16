import { MenuItem } from '@itwin/itwinui-react'
import CopyIcon from '@itwin/itwinui-icons-react/cjs/icons/Copy';
import React from 'react'

export const MenuItems = [
  {
    label: 'iModel Hub Link',
    url: `https://connect-imodelweb.bentley.com/imodeljs/?projectId=${m.projectInfo.wsgId}&iModelId=${m.wsgId}`,
  },
  {
    label: 'iTwin Hub Link',
    url: `https://itwin.bentley.com/project/${m.projectInfo.wsgId}/${m.wsgId}/`,
  },
  {
    label: 'open in iModel Console',
    url: `https://imodelconsole.bentley.com/?projectid=${m.projectInfo.wsgId}&imodelid=${m.wsgId}`,
  },
].map(({ label, url }) => (
  <MenuItem key={1} onClick={() => window.open(url)}>
    <span>
      {label}
      <CopyIcon
        // need styles for on-hover
        onClick={() => {
          navigator.clipboard.writeText(url)
          // notify that they copied it! (maybe trigger a simple animation on the copy icon?)
        }}
      />
    </span>
  </MenuItem>
))
