import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { Tab1Page } from "../tab1/tab1.page";
import { AgregarPage } from "../agregar/agregar.page";
import { Tab2Page } from "../tab2/tab2.page";

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab1/tab1.module#Tab1PageModule'
//           },
//           {
//             path: 'agregar/:listaId',
//             loadChildren: '../agregar/agregar.module#AgregarPageModule'
//           }
//         ]
//       },
//       {
//         path: 'tab2',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab2/tab2.module#Tab2PageModule'
//           },
//           {
//             path: 'agregar/:listaId',
//             loadChildren: '../agregar/agregar.module#AgregarPageModule'
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/tab1',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/tabs/tab1',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            //loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
            component: Tab1Page,
          },
          {
            path: "agregar/:listaId",
            //loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
            component: AgregarPage,
          },
        ],
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            //loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
            component: Tab2Page,
          },
          {
            path: "agregar/:listaId",
            //loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
            component: AgregarPage,
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
