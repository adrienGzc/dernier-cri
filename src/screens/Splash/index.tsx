/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import type { Dispatch } from '@dernierCri/services/store';

interface AwesomeSplashProps extends DispatchProps {}

const AwesomeSplash = ({ setAppStatus }: AwesomeSplashProps) => {
  useEffect(() => {
    const startupAsync = async () => {
      setAppStatus('LOADED');
    };
    startupAsync();
  }, []);

  return <View />;
};

const mapDispatch = ({ session: { setAppStatus } }: Dispatch) => ({
  setAppStatus,
});
type DispatchProps = ReturnType<typeof mapDispatch>;

export default connect(null, mapDispatch)(AwesomeSplash);
