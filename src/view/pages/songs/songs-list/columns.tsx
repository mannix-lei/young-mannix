import React from 'react';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { PlayCircleOutlined, DownloadOutlined, PlayCircleFilled } from '@ant-design/icons';
import style from './songs-list.module.scss';
import { ISong } from '../../../../redux/reducer/song';

export const songsColumn: (width: number, play: (item: ISong) => void, download: (platform: string, id: string, name: string) => void) => ColumnsType<ISong> = (
    width,
    play,
    download,
) => {
    return width > 600
        ? [
              {
                  width: '3rem',
                  render: (_TEXT, record, index) => (
                      <span>{record.playing ? <PlayCircleFilled className={style.palying} /> : index + 1}</span>
                  ),
              },
              {
                  title: 'song-name',
                  dataIndex: 'name',
                  key: 'name',
                  width: '17rem',
                  render: (text: string, record: ISong) => (
                      <a href={record.link} target="_blank">
                          {text}
                      </a>
                  ),
              },
              {
                  title: 'singer-name',
                  dataIndex: 'artists',
                  key: 'artists',
                  className: `${style.hide}`,
                  render: (_TEXT: string, record: ISong) => {
                      return record.artists.map((item) => {
                          const color = record.artists.length > 5 ? 'geekblue' : 'green';
                          return (
                              <Tag color={color} key={item.name}>
                                  <a href={item.link} target="_blank">
                                      {item.name}
                                  </a>
                              </Tag>
                          );
                      });
                  },
              },
              {
                  title: 'album',
                  dataIndex: 'album',
                  key: 'album',
                  className: `${style.hide}`,
                  render: (_TEXT: string, record: ISong) => (
                      <Tag key={record.album.name}>
                          <a href={record.album.link} target="_blank">
                              {record.album.name}
                          </a>
                      </Tag>
                  ),
              },
              {
                  title: 'platform',
                  dataIndex: 'platform',
                  key: 'platform',
                  className: `${style.hide}`,
              },
              {
                  title: 'operation',
                  dataIndex: 'operation',
                  key: 'operation',
                  align: 'center',
                  render: (_TEXT: string, record: ISong) => (
                      <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '20px' }}>
                          <PlayCircleOutlined onClick={() => play(record)} />
                          <DownloadOutlined onClick={() => download(record.platform, record.originalId, record.name)} />
                      </div>
                  ),
              },
          ]
        : [
              {
                  title: 'song-name',
                  dataIndex: 'name',
                  key: 'name',
                  width: '17rem',
                  render: (text: string, record: ISong) => (
                      <div>
                          <a href={record.link} target="_blank">
                              {text}
                          </a>
                          <br />
                          {record.artists.map((item) => {
                              const color = record.artists.length > 5 ? 'geekblue' : 'green';
                              return (
                                  <Tag color={color} key={item.name}>
                                      <a href={item.link} target="_blank">
                                          {item.name}
                                      </a>
                                  </Tag>
                              );
                          })}
                      </div>
                  ),
              },
              {
                  title: 'operation',
                  dataIndex: 'operation',
                  key: 'operation',
                  align: 'center',
                  render: (_TEXT: string, record: ISong) => (
                      <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '20px' }}>
                          <PlayCircleOutlined onClick={() => play(record)} />
                          <DownloadOutlined onClick={() => download(record.platform, record.originalId, record.name)} />
                      </div>
                  ),
              },
          ];
};
