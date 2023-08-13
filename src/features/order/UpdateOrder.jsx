import { useFetcher } from "react-router-dom";

import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

export default function UpdateOrder({ priorityPrice }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        Make Priority,{" "}
        <span className="text-red-500">
          extra {formatCurrency(priorityPrice)}
        </span>
      </Button>
    </fetcher.Form>
  );
}
