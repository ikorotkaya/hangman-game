import React, { Component } from 'react';

interface LegacyWelcomeProps {
  t: (key: string) => string;
}

class LegacyWelcomeClass extends Component<LegacyWelcomeProps, object> {
  render() {
    const { t } = this.props;
    return <h1>{t("title")}</h1>;
  }
}

export default LegacyWelcomeClass;