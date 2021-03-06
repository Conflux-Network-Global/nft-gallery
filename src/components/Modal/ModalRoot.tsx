import React, { memo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalType } from './ModalContext';

/**
 * Modal Root Props
 */
interface ModalRootProps {
  /**
   * Map of modal instances associated by unique ids
   */
  modals: Record<string, ModalType>;

  /**
   * Container component for modals
   *
   * Modals will be rendered as children of this component. React.Fragment is
   * used by defualt, specifying a different component can change the way modals
   * are rendered across the whole application.
   */
  component?: React.ComponentType<unknown>;

  /**
   * Specifies the root element to render modals into
   */
  container?: Element;
}

/**
 * Modal renderer props
 */
interface ModalRendererProps {
  /**
   * Functional component representing the modal
   */
  component: ModalType;
}

/**
 * Component responsible for rendering the modal.
 *
 * The identity of `Component` may change dependeing on the inputs passed to
 * `useModal`. If we simply rendered `<Component />` then the modal would be
 * susceptible to rerenders whenever one of the inputs change.
 */
const ModalRenderer = memo(({ component, ...rest }: ModalRendererProps) =>
  component(rest),
);

/**
 * Modal Root
 *
 * Renders modals using react portal.
 */
const ModalRoot = memo(
  ({
    modals,
    container,
    component: RootComponent = React.Fragment,
  }: ModalRootProps) => {
    const [mountNode, setMountNode] = useState<Element | undefined>(undefined);

    // This effect will not be ran in the server environment
    useEffect(() => setMountNode(container || document.body), [container]);

    return mountNode
      ? ReactDOM.createPortal(
          <RootComponent>
            {Object.keys(modals).map((key) => (
              <ModalRenderer key={key} component={modals[key]} />
            ))}
          </RootComponent>,
          mountNode,
        )
      : null;
  },
);

export default ModalRoot;
