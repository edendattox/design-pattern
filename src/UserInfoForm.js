import React from "react";
import { withEditableResource } from "./withEditableResource";
// import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>
        <label>
          HairColor:
          <input
            type="text"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save Changes</button>
      </div>
    ) : (
      <p>Loading...</p>
    );
  },
  "/users/123",
  "user"
);

// export const UserInfoForm = withEditableUser(
//   ({ user, onChangeUser, onSaveUser, onResetUser }) => {
//     const { name, age, hairColor } = user || {};

//     return user ? (
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => onChangeUser({ name: e.target.value })}
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type="text"
//             value={age}
//             onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
//           />
//         </label>
//         <label>
//           HairColor:
//           <input
//             type="text"
//             value={hairColor}
//             onChange={(e) => onChangeUser({ hairColor: e.target.value })}
//           />
//         </label>
//         <button onClick={onResetUser}>Reset</button>
//         <button onClick={onSaveUser}>Save Changes</button>
//       </div>
//     ) : (
//       <p>Loading...</p>
//     );
//   },
//   "123"
// );
