/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import cn from 'classnames';

import mantraImg from 'images/card1.png';
import crabImg from 'images/card2.png';

import Button from 'components/Button';
import SvgIcon from 'components/SvgIcon';
import IconButton from 'components/IconButton';
import Select, { SelectItem } from 'components/Select';
import TextField from 'components/TextField';
import Tooltip from 'components/Tooltip';
import Chip from 'components/Chip';
import CardInitialGallery from 'components/Card';
import CardGetCard from 'components/CardGetCard';

import styles from './UiLibScreen.module.scss';

export type UiLibScreenProps = {
  className?: string;
};

const UiLibScreen: React.FC<UiLibScreenProps> = ({ className }) => {
  const Icons = (
    <div className={styles.container}>
      <h1 className={styles.header}>Icons</h1>
      <div className={styles.gridWrapper}>
        <SvgIcon icon="youtube" className={styles.icon} />
        <SvgIcon icon="reddit" className={styles.icon} />
        <SvgIcon icon="twitter" className={styles.icon} />
        <SvgIcon icon="telegram" className={styles.icon} />
        <SvgIcon icon="discord" className={styles.icon} />
        <SvgIcon icon="medium" className={styles.icon} />
        <SvgIcon icon="github" className={styles.icon} />
        <SvgIcon icon="weibo" className={styles.icon} />
        <SvgIcon icon="talk" className={styles.icon} />
        <SvgIcon icon="wechat" className={styles.icon} />
        <SvgIcon icon="search" className={styles.icon} />
        <SvgIcon icon="add" className={styles.icon} />
        <SvgIcon icon="sort" className={styles.icon} />
        <SvgIcon icon="language" className={styles.icon} />
        <SvgIcon icon="info" className={styles.icon} />
        <SvgIcon icon="arrow_back" className={styles.icon} />
        <SvgIcon icon="arrow_downward" className={styles.icon} />
        <SvgIcon icon="arrow_forward" className={styles.icon} />
        <SvgIcon icon="arrow_upward" className={styles.icon} />
        <SvgIcon icon="chevron_left" className={styles.icon} />
        <SvgIcon icon="chevron_right" className={styles.icon} />
        <SvgIcon icon="expand_less" className={styles.icon} />
        <SvgIcon icon="expand_more" className={styles.icon} />
        <SvgIcon icon="play" className={styles.icon} />
        <SvgIcon icon="qr" className={styles.icon} />
        <SvgIcon icon="plus" className={styles.icon} />
        <SvgIcon icon="minus" className={styles.icon} />
        <SvgIcon icon="menu" className={styles.icon} />
      </div>
    </div>
  );
  const Buttons = (
    <div className={styles.container}>
      <h1 className={styles.header}>Buttons</h1>
      <div className={styles.wrapper}>
        <h2 className={styles.subheader}>Buttons - 48px</h2>
        <div className={styles.row}>
          <div className={styles.column}>
            <Button label="Button" variant="primary" size="large" />
            <Button label="Button" variant="primary" size="large" disabled />
            <Button label="Button" variant="secondary" size="large" />
            <Button label="Button" variant="tertiary" size="large" />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="large"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="large"
              leftElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="large"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="tertiary"
              size="large"
              leftElement={<SvgIcon icon="link" />}
            />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="large"
              rightElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="large"
              rightElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="large"
              rightElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="tertiary"
              size="large"
              rightElement={<SvgIcon icon="link" />}
            />
          </div>
          <div className={styles.column}>
            <IconButton buttonSize="large" icon="link" variant="primary" />
            <IconButton
              buttonSize="large"
              icon="link"
              variant="primary"
              disabled
            />
            <IconButton buttonSize="large" icon="link" variant="secondary" />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="large"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="large"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="large"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className={styles.subheader}>Buttons - 40px</h2>
        <div className={styles.row}>
          <div className={styles.column}>
            <Button label="Button" variant="primary" size="medium" />
            <Button label="Button" variant="secondary" size="medium" />
            <Button label="Button" variant="tertiary" size="medium" />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="medium"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="medium"
              leftElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="medium"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="tertiary"
              size="medium"
              leftElement={<SvgIcon icon="link" />}
            />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="medium"
              rightElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="medium"
              rightElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="medium"
              rightElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="tertiary"
              size="medium"
              rightElement={<SvgIcon icon="link" />}
            />
          </div>
          <div className={styles.column}>
            <IconButton buttonSize="medium" icon="link" variant="primary" />
            <IconButton
              buttonSize="medium"
              icon="link"
              variant="primary"
              disabled
            />
            <IconButton buttonSize="medium" icon="link" variant="secondary" />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="medium"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="medium"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="medium"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className={styles.subheader}>Buttons - 36px</h2>
        <div className={styles.row}>
          <div className={styles.column}>
            <Button label="Button" variant="primary" size="small" />
            <Button label="Button" variant="secondary" size="small" />
            <Button label="Button" variant="tertiary" size="small" />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="small"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="small"
              leftElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="small"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="tertiary"
              size="small"
              leftElement={<SvgIcon icon="link" />}
            />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="small"
              rightElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="small"
              rightElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="small"
              rightElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="tertiary"
              size="small"
              rightElement={<SvgIcon icon="link" />}
            />
          </div>
          <div className={styles.column}>
            <IconButton buttonSize="small" icon="link" variant="primary" />
            <IconButton
              buttonSize="small"
              icon="link"
              variant="primary"
              disabled
            />
            <IconButton buttonSize="small" icon="link" variant="secondary" />
          </div>
          <div className={styles.column}>
            <Button
              label="Button"
              variant="primary"
              size="small"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
            />
            <Button
              label="Button"
              variant="primary"
              size="small"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
              disabled
            />
            <Button
              label="Button"
              variant="secondary"
              size="small"
              color="warning"
              leftElement={<SvgIcon icon="link" />}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const [dropdownValue, setDropdownValue] = useState<SelectItem>();
  const Dropdowns = (
    <div className={styles.container}>
      <h1 className={styles.header}>Dropdown</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <Select
            label="Sorting"
            value={dropdownValue as SelectItem}
            options={[
              { name: 'Item 1', value: 'item_1' },
              { name: 'Item 2', value: 'item_2' },
              { name: 'Item 3', value: 'item_3' },
            ]}
            onChange={(item) => setDropdownValue(item)}
            className={styles.input}
          />
          <Select
            label="Sorting"
            value={dropdownValue as SelectItem}
            options={[
              { name: 'Item 1', value: 'item_1' },
              { name: 'Item 2', value: 'item_2' },
              { name: 'Item 3', value: 'item_3' },
            ]}
            onChange={(item) => setDropdownValue(item)}
            disabled
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );

  const [textfieldValue, setTextFieldValue] = useState({ value: '', name: '' });
  const InputsLight = (
    <div className={cn(styles.container, styles.light)}>
      <h1 className={styles.header}>
        Inputs - Text field &amp; Text area(Light)
      </h1>
      <div className={styles.wrapper}>
        <h2 className={styles.subheader}>Text field - 56px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={56}
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={56}
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={56}
          />
        </div>
        <h2 className={styles.subheader}>Text field - 48px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={48}
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={48}
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={48}
          />
        </div>
        <h2 className={styles.subheader}>Text field - 40px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={40}
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={40}
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={40}
          />
        </div>
        <h2 className={styles.subheader}>Text field - 36px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={36}
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={36}
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={36}
          />
        </div>
        <h2 className={styles.subheader}>Text Areas</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            multiline
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.textArea}
          />
          <TextField
            name="textfield"
            label="Input"
            multiline
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.textArea}
            errorHighlight
          />
        </div>
      </div>
    </div>
  );

  const InputsDark = (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Inputs - Text field &amp; Text area(Dark)
      </h1>
      <div className={styles.wrapper}>
        <h2 className={styles.subheader}>Text field - 56px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={56}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={56}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={56}
            dark
          />
        </div>
        <h2 className={styles.subheader}>Text field - 48px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={48}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={48}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={48}
            dark
          />
        </div>
        <h2 className={styles.subheader}>Text field - 40px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={40}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={40}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={40}
            dark
          />
        </div>
        <h2 className={styles.subheader}>Text field - 36px</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={36}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            errorHighlight
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={36}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            value={textfieldValue.value}
            disabled
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.input}
            height={36}
            dark
          />
        </div>
        <h2 className={styles.subheader}>Text Areas</h2>
        <div className={styles.column}>
          <TextField
            name="textfield"
            label="Input"
            multiline
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.textArea}
            dark
          />
          <TextField
            name="textfield"
            label="Input"
            multiline
            value={textfieldValue.value}
            onChange={(value: string, name: string) =>
              setTextFieldValue({ value, name })
            }
            className={styles.textArea}
            errorHighlight
            dark
          />
        </div>
      </div>
    </div>
  );

  const Tooltips = (
    <div className={styles.container}>
      <h1 className={styles.header}>Tooltips</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <Tooltip
            position="top"
            showArrow
            triggerElem={<p>Hover me - tooltip top</p>}
          >
            <p>
              You can use handlebars&#8209;like&nbsp;variables for chat context
              like
            </p>
          </Tooltip>
          <Tooltip
            position="bottom"
            showArrow
            triggerElem={<p>Hover me - tooltip bottom</p>}
          >
            <p>
              You can use handlebars&#8209;like&nbsp;variables for chat context
              like
            </p>
          </Tooltip>
          <Tooltip
            position="left"
            showArrow
            triggerElem={<p>Hover me - tooltip left</p>}
          >
            <p>Home</p>
          </Tooltip>
          <Tooltip
            position="right"
            showArrow
            triggerElem={<p>Hover me - tooltip right</p>}
          >
            <p>Home</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );

  const Chips = (
    <div className={styles.container}>
      <h1 className={styles.header}>Chips</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <Chip text="All types" />
          <Chip text="All types" active />
        </div>
      </div>
    </div>
  );

  const Cards = (
    <div className={styles.container}>
      <h1 className={styles.header}>Cards</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2 className={styles.subheader}>Variant: Gallery - Initial</h2>
          <CardInitialGallery
            link="#"
            title="Mantra DAO"
            image={mantraImg}
            collection="Collection 1"
            available={120}
            actionName="Buy"
            toolTipText="Description"
            priceETH="0.6"
            priceUSD="899.67"
            variant="gallery-initial"
          />
          <h2 className={styles.subheader}>Variant: Gallery - Secondary</h2>
          <CardInitialGallery
            link="#"
            openseaLink="#"
            title="Mantra DAO"
            image={crabImg}
            collection="Collection 2"
            available={6}
            actionName="Buy"
            toolTipText="Description"
            priceETH="0.5"
            priceUSD="875.67"
            variant="gallery-secondary"
          />
          <h2 className={styles.subheader}>Variant: Profile - Initial</h2>
          <CardInitialGallery
            title="Mantra DAO"
            image={mantraImg}
            collection="Collection 2"
            available={70}
            toolTipText="Description"
            priceETH="0.5"
            priceUSD="875.67"
            variant="profile-initial"
          />
          <h2 className={styles.subheader}>Variant: Profile - Secondary</h2>
          <CardInitialGallery
            openseaLink="#"
            title="Mantra DAO"
            image={crabImg}
            collection="Collection 2"
            available={116}
            toolTipText="Description"
            priceETH="0.5"
            priceUSD="875.67"
            variant="profile-secondary"
          />
          <h2 className={styles.subheader}>Card - Get your first card</h2>
          <CardGetCard />
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn(styles.root, className)}>
      {Icons}
      {Buttons}
      {Dropdowns}
      {InputsLight}
      {InputsDark}
      {Tooltips}
      {Chips}
      {Cards}
    </div>
  );
};

export default UiLibScreen;
