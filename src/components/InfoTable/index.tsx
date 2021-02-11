/* eslint-disable react/no-array-index-key */
import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

type ContentTableProps = {
  label: string;
  content: string | JSX.Element;
};

type SectionProps = {
  header: string;
  content: Array<ContentTableProps>;
};

interface InfoTableProps {
  config: {
    sections: Array<SectionProps>;
  };
}

const InfoTable = ({ config }: InfoTableProps) => (
  <>
    {config.sections.map((elem: SectionProps, key) => (
      <View key={key} style={key > 0 && style.sectionContainer}>
        <Text style={style.titleHeader}>{elem.header}</Text>
        <View>
          {elem.content.map((row: ContentTableProps, keyRow) => {
            const upperLine = keyRow % 2;
            const isLastOne = keyRow === elem.content.length - 1;

            return (
              <View
                key={keyRow}
                style={[
                  style.row,
                  !upperLine && style.rowUpperLine,
                  isLastOne && style.rowLineDown,
                ]}
              >
                <View style={style.labelCol}>
                  <Text style={style.rowLabel}>{row.label}</Text>
                </View>
                <View style={style.contentCol}>
                  <Text>{row.content}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    ))}
  </>
);

export default InfoTable;
