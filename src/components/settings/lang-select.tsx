import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { langsList, localizationsMap } from '@localization/index';
import { settingsActions } from '../../store/slices/settings/settings.slice';
import { useDispatch } from '../../store/hooks';
import { useLocalization } from '@localization/tools';

export const LangSelect = () => {
  const loc = useLocalization();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4">
      <div>{loc.language}:</div>
      <Popover
        interactionKind="click"
        position="left-top"
        content={
          <Menu className="max-h-40 overflow-y-auto">
            {langsList.map(lang => (
              <MenuItem
                key={lang}
                text={localizationsMap[lang].localizationTitle}
                onClick={() => dispatch(settingsActions.setLang(lang))}
              />
            ))}
          </Menu>
        }
        renderTarget={({ isOpen, ...targetProps }) => (
          <Button {...targetProps} rightIcon="chevron-down">
            {loc.localizationTitle}
          </Button>
        )}
      />
    </div>
  );
};
