import React, {useState, useEffect} from 'react'

function FileTree({root}) {
	const [folder, setFolder] = useState(true)

	function handleClick(e) {
		setFolder(!folder)
	}

	let node = []
	if (root.type === 'dir') {
		//       node = <li data-test="node">
		//                  <p className = 'folder' onClick={handleClick}> 📂{root.name} </p>
		//                 <div className={folder && 'display'} data-test="dir-expand">
		//                   {root.children.map((item,index)=> <li key={index}><FileTree root={item}/></li>)}
		//                 </div>
		//           </li>

		node = (
			<li data-test="node">
				<p onClick={handleClick} data-test="dir-expand">
					{' '}
					📂{root.name}{' '}
				</p>
				{!folder && (
					<div className={folder && 'display'} data-test="dir-expand">
						{root.children.map((item, index) => (
							<li key={index}>
								<FileTree root={item} />
							</li>
						))}
					</div>
				)}
			</li>
		)
	}
	if (root.type === 'file') {
		node = <li data-test="node">📄 {root.name}</li>
	}

	return <ul>{node}</ul>
}

export default FileTree
