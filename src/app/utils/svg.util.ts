import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export  const  loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  const imgDir = 'assets/img';
  const  sidebarDir = '${imgDir}/sidebar';
  const avatarDir = '${imgDir}/avatar';
  const iconDir = '${imgDir}/icons';

  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl('assets/img/avatar/avatars.svg'));
  ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl('assets/img/avatar/unassigned.svg'));
  ir.addSvgIcon('safe', ds.bypassSecurityTrustResourceUrl('assets/safe.svg'));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/day.svg'));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/month.svg'));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/project.svg'));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/projects.svg'));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/week.svg'));
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl('assets/img/icons/move.svg'));
  ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl('assets/img/icons/add.svg'));
  ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl('assets/img/icons/delete.svg'));

  const  days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  days.forEach(d => ir.addSvgIcon('day' + d, ds.bypassSecurityTrustResourceUrl('assets/img/days/day' + d + '.svg')))
}
