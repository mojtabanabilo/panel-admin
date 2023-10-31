import React from "react";
import { Button, Modal, Form, InputGroup, Stack } from "react-bootstrap";
import { useMyContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { modalCreateItemValidation } from "../../utils/functions/functions";
import { useEffect, useState } from "react";
import { IModalCreateItemError, ITouchProperties } from "../../utils/types/interface";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalCreateItem = () : JSX.Element => {
  //states
  const [errors, setErrors] = useState<IModalCreateItemError>({});
  const [touch, setTouch] = useState<ITouchProperties>({
    nameTouch: false,
    countTouch: false,
    priceTouch: false,
  });

  // context
  const { setModalAdd, product, data, setProduct, setData } = useMyContext();

  // navigator
  const navigate = useNavigate();

  // lifecycle
  useEffect(() => {
    setErrors(modalCreateItemValidation(product));
  }, [product]);

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
          <Modal.Title>مشخصات</Modal.Title>
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
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
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
                  value={product.count}
                  onChange={(e) =>
                    setProduct({ ...product, count: e.target.value })
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
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
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
              await setModalAdd(false);
              await setProduct({ name: "", count: "", price: "" });
              await navigate("/main");
            }}
          >
            بستن
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              if(Object.keys(errors).length > 0) {
                await toast.error('اطلاعات معتبر نیست !', {
                  position: "bottom-center",
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                await setData([...data, product]);
                await setProduct({ name: "", count: "", price: "" });
                await setModalAdd(false);
                await navigate("/main");
              }
            }}
          >
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalCreateItem;
