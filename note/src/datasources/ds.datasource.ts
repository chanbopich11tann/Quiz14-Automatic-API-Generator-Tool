import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ds',
  connector: 'memory',
  localStorage: '',
  file: './data/ds.json',
};

export class DsDataSource extends juggler.DataSource {
  static dataSourceName = 'ds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}