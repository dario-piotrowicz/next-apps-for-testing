"use client";

export const runtime = 'edge';

import * as svgIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./page.module.css";

export default function NextUiPage() {

  return (
    <div className={styles.container}>
        {
           Object.values(svgIcons)
           .filter(icon => (icon as any).iconName)
           .map((icon: any) => <div key={icon.iconName}>
             <FontAwesomeIcon className={styles.icon} icon={icon} size={'2x'} />
            </div>
           )
        }
    </div>
  );
}
