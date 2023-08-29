import { CloseOutlined } from '@ant-design/icons';
import { Col, Image, Row, message } from 'antd';
import { RcFile } from 'antd/es/upload';
import Dragger from 'antd/es/upload/Dragger';
import { remove } from 'lodash';
import { FC, memo } from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import './index.less';
import { IListDocument, IPropFile } from '@/pages/folders/components/UploadDocument';
import { useParams } from 'react-router-dom';
import { toJS } from 'mobx';
import { toBase64 } from '@/helpers/functions';

type UploadFileProps = {
  multiple?: boolean;
  filesList: IPropFile[];
  setFiles: any;
  docItem: IListDocument;
};

const FILE_SIZE = 5;
const LIST_ACCEPT_TYPE = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg', 'application/zip', 'text/xml'];
const DraggerDropFileBase: FC<UploadFileProps> = props => {
  const { multiple, filesList, setFiles, docItem } = props;
  const params = useParams();

  const handleBeforeChangeUpload = async (file: RcFile) => {
    const isAcceptFileSize = file.size <= FILE_SIZE * 1024 * 1024;
    const isAcceptFileType = LIST_ACCEPT_TYPE.includes(file.type);
    const previewData = await toBase64(file);
    if (!isAcceptFileSize) {
      message.error(`${file.name} vượt quá ${FILE_SIZE}MB`);
    } else if (!isAcceptFileType) {
      message.error(`${file.name} không phù hợp format`);
    } else {
      if (!filesList.map(item => item.fileName).includes(file.name)) {
        setFiles((prevItems: IListDocument[]) => [
          ...prevItems,
          {
            docType: toJS(docItem).model,
            filePath: `${params['*']}`,
            fileName: file.name,
            fileData: file,
            previewData: previewData,
            isError: false,
          },
        ]);
      } else {
        message.error(`Chứng từ ${file.name} đã được tải lên`);
      }
    }
    return isAcceptFileSize && isAcceptFileType;
  };

  const handleRemoveFile = (file: any, event: any) => {
    event.stopPropagation();
    const newListFile = [...filesList];
    remove(newListFile, (o: any) => o.fileData.uid === file.fileData.uid);
    setFiles(newListFile);
  };

  return (
    <Dragger
      {...props}
      accept={'.pdf,.png,.jpg,.jpeg,.zip,.xml'}
      beforeUpload={handleBeforeChangeUpload}
      showUploadList={false}
      multiple={multiple}
    >
      {filesList.filter(item => item.docType === docItem.model).length == 0 ? (
        <>
          <p className="ant-upload-text">{'Kéo và thả hoặc Click vào đây để tải lên file'}</p>
          <div className="ant-upload-hint">
            <span>{'Định dạng hỗ trợ: PDF, PNG, JPG, JPEG, ZIP, XML'}</span>
          </div>
        </>
      ) : (
        <Row className="files-wrapper">
          {filesList
            ?.filter(item => item.docType === docItem.model)
            .map((file: any) => (
              <Col span={4} key={file.fileData.uid}>
                <div className="file">
                  <CloseOutlined className="icon-delete-file-upload" onClick={event => handleRemoveFile(file, event)} />
                  <span>
                    {file.fileData.type.includes('image') ? (
                      <Image className="file-image" src={file.previewData} preview={true} />
                    ) : (
                      <AiOutlineFileText className="file-icon" />
                    )}
                  </span>
                  <span className="file-name" style={{ color: file.isError ? 'red' : 'black' }}>
                    {file.fileName}
                  </span>
                </div>
              </Col>
            ))}
        </Row>
      )}
    </Dragger>
  );
};

export default memo(DraggerDropFileBase);
