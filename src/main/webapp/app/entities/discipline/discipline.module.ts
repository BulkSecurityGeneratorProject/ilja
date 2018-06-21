import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IljaSharedModule } from '../../shared';
import {
    DisciplineService,
    DisciplinePopupService,
    DisciplineComponent,
    DisciplineDetailComponent,
    DisciplineDialogComponent,
    DisciplinePopupComponent,
    DisciplineDeletePopupComponent,
    DisciplineDeleteDialogComponent,
    disciplineRoute,
    disciplinePopupRoute,
} from './';

const ENTITY_STATES = [
    ...disciplineRoute,
    ...disciplinePopupRoute,
];

@NgModule({
    imports: [
        IljaSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DisciplineComponent,
        DisciplineDetailComponent,
        DisciplineDialogComponent,
        DisciplineDeleteDialogComponent,
        DisciplinePopupComponent,
        DisciplineDeletePopupComponent,
    ],
    entryComponents: [
        DisciplineComponent,
        DisciplineDialogComponent,
        DisciplinePopupComponent,
        DisciplineDeleteDialogComponent,
        DisciplineDeletePopupComponent,
    ],
    providers: [
        DisciplineService,
        DisciplinePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IljaDisciplineModule {}
