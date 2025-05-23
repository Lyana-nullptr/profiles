import { homedir } from 'node:os'
import { join } from 'node:path'
import { env } from 'node:process'

export const BOOLEAN_PARAMETER_KEYS = ['-?', '-h', '-v', '-o']

export interface InstallableMatcher {
  /**
   * The glob pattern to match the profile collection, relative to the `source` path
   */
  match: string

  /**
   * The folder to install the profile collection
   */
  installFolder: string | string[]
}

export interface ProfileCollection {
  /**
   * The source path of the profile collection, relative to project root
   */
  source: string

  /**
   * The install matchers for installing the profile collection.
   *
   * Profiles not matched by any matcher will not be installed.
   */
  installMatchers: InstallableMatcher[]
}

/**
 * Supported profile collections
 *
 * FIXME: Need test `installFolder` in unix & linux like system
 */
export const SUPPORTED_PROFILE_COLLECTIONS: ProfileCollection[] = [
  {
    source: 'profiles/personal/preferences',
    installMatchers: [
      {
        match: 'editor/neovim/**/*',
        installFolder: join(env.LOCALAPPDATA || '', 'nvim'),
      },
      {
        match: 'editor/vscode/{settings,keybindings}.json',
        installFolder: [
          join(env.APPDATA || '', 'Code', 'User'),
          join(env.APPDATA || '', 'Cursor', 'User'),
        ],
      },
      {
        match: 'editor/.editorconfig',
        installFolder: homedir(),
      },
      {
        match: 'formatter/prettier/**/*',
        installFolder: homedir(),
      },
      {
        match: 'linter/cspell/**/*',
        installFolder: homedir(),
      },
      {
        match: 'package-manager/maven/**/*',
        installFolder: join(homedir(), '.m2'),
      },
      {
        match: 'terminal/powershell/**/*',
        installFolder: join(env.USERPROFILE || '', 'Documents', 'PowerShell'),
      },
      {
        match: 'terminal/windows-terminal/settings.json',
        installFolder: join(env.LOCALAPPDATA || '', 'Packages', 'Microsoft.WindowsTerminal_8wekyb3d8bbwe', 'LocalState'),
      },
      {
        match: 'vcs/git/.gitconfig',
        installFolder: homedir(),
      },
      {
        match: 'vpn/clash-for-windows/cfw-settings.yaml',
        installFolder: join(homedir(), '.config', 'clash'),
      },
    ],
  },
  {
    source: 'profiles/work/preferences',
    installMatchers: [
      {
        match: 'linter/cspell/**/*',
        installFolder: homedir(),
      },
    ],
  },
]
