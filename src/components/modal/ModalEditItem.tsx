import { Button, Modal, Form, InputGroup, Stack } from "react-bootstrap";
import { useMyContext } from "../../context/context";
import { useParams, useNavigate } from "react-router-dom";
import { modalCreateItemValidation, duplicateNotifyError } from "../../utils/functions/functions";
import { useEffect, useState } from "react";
import { IModalCreateItemError, ITouchProperties, ICurrentItem } from "../../utils/types/interface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalEditItem = () : JSX.Element => {
  //states
  const [errors, setErrors] = useState<IModalCreateItemError | null>({});
  const [currentItem, setCurrentItem] = useState<ICurrentItem | null>({});
  const [touch, setTouch] = useState<ITouchProperties>({
    nameTouch: false,
    countTouch: false,
    priceTouch: false,
  });

  // params & navigate
  let { indexItem } = useParams<'indexItem'>();
  const navigate = useNavigate();

  // context
  const { data } = useMyContext();  
  
  // lifecycle
  useEffect(() => {
    indexItem && setCurrentItem(data[+indexItem]);
  }, []);
  useEffect(() => {
    setErrors(modalCreateItemValidation(currentItem));
  }, [currentItem]);

  return (
    <div
      className="modal show"
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        background: "#00000094",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        direction: "rtl",
      }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>ویرایش</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <Stack>
              <Stack direction="horizontal">
                <InputGroup.Text id="inputGroup-sizing-default">
                  نام محصول
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="name"
                  value={currentItem?.name || ""}
                  onChange={(e) =>
                    setCurrentItem({...currentItem, [e.target.name] : e.target.value})
                  }
                  onFocus={() => setTouch({ ...touch, nameTouch: true })}
                />
              </Stack>
              {errors?.nameField && touch.nameTouch && (
                <span className="px-2 text-danger">{errors.nameField}</span>
              )}
            </Stack>
          </InputGroup>
          <InputGroup className="mb-3">
            <Stack>
              <Stack direction="horizontal">
                <InputGroup.Text id="inputGroup-sizing-default">
                  تعداد
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="count"
                  value={currentItem?.count || ""}
                  onChange={(e) =>
                    setCurrentItem({...currentItem, [e.target.name] : e.target.value})
                  }
                  onFocus={() => setTouch({ ...touch, countTouch: true })}
                />
              </Stack>
              {errors?.countField && touch.countTouch && (
                <span className="px-2 text-danger">{errors.countField}</span>
              )}
            </Stack>
          </InputGroup>
          <InputGroup className="mb-3">
            <Stack>
              <Stack direction="horizontal">
                <InputGroup.Text id="inputGroup-sizing-default">
                  قیمت
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="price"
                  value={currentItem?.price || ""}
                  onChange={(e) =>
                    setCurrentItem({...currentItem, [e.target.name] : e.target.value})
                  }
                  onFocus={() => setTouch({ ...touch, priceTouch: true })}
                />
              </Stack>
              {errors?.priceField && touch.priceTouch && (
                <span className="px-2 text-danger">{errors.priceField}</span>
              )}
            </Stack>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={async () => {
              await setCurrentItem({});
              await navigate('/main', {replace: true});   
            }}
          >
            بستن
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              if(errors){
                  if (Object.keys(errors).length > 0) {
                    await duplicateNotifyError();
                  } else {                             
                    if(indexItem) data[+indexItem] = currentItem;
                    await setCurrentItem(null);
                    await navigate('/main', {replace: true});
                  }
                }
              }
            }
          >
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ModalEditItem;
