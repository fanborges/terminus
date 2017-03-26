import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { ToolbarButtonProvider, TabRecoveryProvider } from 'api'
import { SettingsProvider } from '../settings/api'

import { TerminalTabComponent } from './components/terminalTab'
import { SettingsComponent } from './components/settings'
import { SessionsService } from './services/sessions'
import { ScreenPersistenceProvider } from './persistenceProviders'
import { ButtonProvider } from './buttonProvider'
import { RecoveryProvider } from './recoveryProvider'
import { SessionPersistenceProvider } from './api'
import { TerminalSettingsProvider } from './settings'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
    ],
    providers: [
        { provide: ToolbarButtonProvider, useClass: ButtonProvider, multi: true },
        { provide: TabRecoveryProvider, useClass: RecoveryProvider, multi: true },
        SessionsService,
        { provide: SessionPersistenceProvider, useClass: ScreenPersistenceProvider },
        { provide: SettingsProvider, useClass: TerminalSettingsProvider, multi: true },
    ],
    entryComponents: [
        TerminalTabComponent,
        SettingsComponent,
    ],
    declarations: [
        TerminalTabComponent,
        SettingsComponent,
    ],
})
class TerminalModule {
}


export default TerminalModule
