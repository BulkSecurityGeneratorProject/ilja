import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IljaSharedModule } from '../../shared';
import {
    ResourceService,
    ResourcePopupService,
    ResourceComponent,
    ResourceDetailComponent,
    ResourceDialogComponent,
    ResourcePopupComponent,
    ResourceDeletePopupComponent,
    ResourceDeleteDialogComponent,
    resourceRoute,
    resourcePopupRoute,
} from './';

const ENTITY_STATES = [
    ...resourceRoute,
    ...resourcePopupRoute,
];

@NgModule({
    imports: [
        IljaSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ResourceComponent,
        ResourceDetailComponent,
        ResourceDialogComponent,
        ResourceDeleteDialogComponent,
        ResourcePopupComponent,
        ResourceDeletePopupComponent,
    ],
    entryComponents: [
        ResourceComponent,
        ResourceDialogComponent,
        ResourcePopupComponent,
        ResourceDeleteDialogComponent,
        ResourceDeletePopupComponent,
    ],
    providers: [
        ResourceService,
        ResourcePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IljaResourceModule {}
